import fs from 'fs'
import nodePath from 'path'

const getDirsSync = (path: string): string[] => {
  const readResult = fs.readdirSync(path)
  const dirs = readResult.filter(f => fs.statSync(nodePath.join(path, f)).isDirectory())

  return dirs
}

const getDirs = async (path: string): Promise<string[]> => {
  const readResult = await fs.promises.readdir(path)
  const stats = await Promise.all(
    readResult.map(f => fs.promises.stat(nodePath.join(path, f))) // eslint-disable-line @typescript-eslint/promise-function-async
  )
  const dirs = readResult.filter((f, i) => stats[i].isDirectory())

  return dirs
}

const getFilesSync = (path: string): string[] => {
  const readResult = fs.readdirSync(path)
  const files = readResult.filter(f => fs.statSync(nodePath.join(path, f)).isFile())

  return files
}

const getFiles = async (path: string): Promise<string[]> => {
  const readResult = await fs.promises.readdir(path)
  const stats = await Promise.all(
    readResult.map(f => fs.promises.stat(nodePath.join(path, f))) // eslint-disable-line @typescript-eslint/promise-function-async
  )
  const files = readResult.filter((f, i) => stats[i].isFile())

  return files
}

export default {
  getDirsSync,
  getDirs,
  getFilesSync,
  getFiles
}
