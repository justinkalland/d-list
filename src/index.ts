import fs from 'fs'
import nodePath from 'path'

const getDirsSync = (path): String[] => {
  const readResult = fs.readdirSync(path)
  const dirs = readResult.filter(f => fs.statSync(nodePath.join(path, f)).isDirectory())

  return dirs
}

const getFilesSync = (path): String[] => {
  const readResult = fs.readdirSync(path)
  const files = readResult.filter(f => fs.statSync(nodePath.join(path, f)).isFile())

  return files
}

export default {
  getDirsSync,
  getFilesSync
}
