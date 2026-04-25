import fs from "fs";
import path from "path";

export function generateCertificate(name) {
  const filePath = path.join(
    process.cwd(),
    "public/uploads/certificates",
    `${name}.txt`
  );
  
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  
  fs.writeFileSync(filePath, `Certificate for ${name}`);
  return filePath;
}
