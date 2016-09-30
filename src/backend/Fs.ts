export interface Fs {
  readdir(path: string | Buffer, callback?: (err: NodeJS.ErrnoException, files: string[]) => void): void;
  readdirSync(path: string | Buffer): string[];
  existsSync(path: string | Buffer): boolean;
  writeFileSync(path: string|Buffer, data: string|Buffer): void;
  readFile(path: string | Buffer, callback?: (err: NodeJS.ErrnoException, data: Buffer) => void): void;
}
