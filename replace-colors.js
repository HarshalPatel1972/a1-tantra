const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const extensions = ['.tsx', '.ts'];
const ignoreDirs = ['node_modules', '.next', '.git'];

function isIgnored(filePath) {
  return ignoreDirs.some(dir => filePath.includes(path.sep + dir + path.sep) || filePath.includes(path.sep + dir));
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (isIgnored(filePath)) return;
    
    if (stat.isDirectory()) {
      walk(filePath);
    } else if (extensions.includes(path.extname(filePath))) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        const original = content;
        
        content = content.replace(/text-deep-brown\b/g, 'text-mystique-taupe');
        content = content.replace(/bg-deep-brown\b/g, 'bg-mystique-taupe');
        content = content.replace(/border-deep-brown\b/g, 'border-mystique-taupe');
        content = content.replace(/deep-brown\//g, 'mystique-taupe/');
        content = content.replace(/"deep-brown"/g, '"mystique-taupe"');
        content = content.replace(/'deep-brown'/g, "'mystique-taupe'");
        
        if (content !== original) {
          fs.writeFileSync(filePath, content, 'utf8');
          console.log(`✓ ${path.relative(rootDir, filePath)}`);
        }
      } catch (err) {
        console.error(`✗ ${filePath}: ${err.message}`);
      }
    }
  });
}

walk(rootDir);
console.log('Done!');
