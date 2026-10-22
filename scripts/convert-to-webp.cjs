/**
 * Converte todas as imagens JPG/PNG em src/assets/images para WebP
 * mantendo os originais e gerando arquivos .webp com prefixo igual.
 * Dimensões máximas: 1440px (hero), 800px (cards de serviço).
 */

const sharp = require('sharp');
const path  = require('path');
const fs    = require('fs');

const SRC_DIR = path.join(__dirname, '..', 'src', 'assets', 'images');

// Configuração por padrão de nome (maxWidth em px, qualidade WebP)
const rules = [
  { match: /hero/i,                   maxWidth: 1440, quality: 82 },
  { match: /service_mecanico/i,       maxWidth: 800,  quality: 80 },
  { match: /service_frotas/i,         maxWidth: 800,  quality: 80 },
  { match: /Imagem do Codex/i,        maxWidth: 800,  quality: 80 },
  { match: /.*/,                      maxWidth: 800,  quality: 80 }, // fallback
];

function getRule(filename) {
  return rules.find(r => r.match.test(filename));
}

async function convertAll() {
  const files = fs.readdirSync(SRC_DIR).filter(f =>
    /\.(jpg|jpeg|png)$/i.test(f) && f !== 'logo_libra.png'
  );

  console.log(`\n📦 Convertendo ${files.length} imagens para WebP...\n`);

  for (const file of files) {
    const inputPath  = path.join(SRC_DIR, file);
    const baseName   = path.basename(file, path.extname(file));
    const outputName = baseName + '.webp';
    const outputPath = path.join(SRC_DIR, outputName);

    // Pula se WebP já existir e for mais recente
    if (
      fs.existsSync(outputPath) &&
      fs.statSync(outputPath).mtimeMs > fs.statSync(inputPath).mtimeMs
    ) {
      console.log(`  ⏭  ${outputName} já existe, pulando.`);
      continue;
    }

    const rule = getRule(file);
    const { maxWidth, quality } = rule;

    try {
      const meta = await sharp(inputPath).metadata();
      const resizeOpts = meta.width > maxWidth
        ? { width: maxWidth, withoutEnlargement: true }
        : null;

      let pipeline = sharp(inputPath);
      if (resizeOpts) pipeline = pipeline.resize(resizeOpts);

      const info = await pipeline
        .webp({ quality, effort: 4 })
        .toFile(outputPath);

      const origKB   = Math.round(fs.statSync(inputPath).size / 1024);
      const newKB    = Math.round(info.size / 1024);
      const savings  = Math.round((1 - info.size / fs.statSync(inputPath).size) * 100);

      console.log(`  ✅ ${file}`);
      console.log(`     ${origKB} KB → ${newKB} KB  (−${savings}%)`);
    } catch (err) {
      console.error(`  ❌ Erro em ${file}:`, err.message);
    }
  }

  console.log('\n✨ Conversão concluída.\n');
}

convertAll();
