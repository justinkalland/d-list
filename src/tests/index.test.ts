import path from 'path'
import dl from '../'

const relativePath = 'src/tests/test-dir'
const absolutePath = path.join(__dirname, 'test-dir/')

describe('gets directories', () => {
  it('sync with relative path', () => {
    const dirs = dl.getDirsSync(relativePath)
    expect(dirs).toEqual([
      'dir-1',
      'dir-2',
      'dir-3'
    ])
  })

  it('sync with absolute path', () => {
    const dirs = dl.getDirsSync(absolutePath)
    expect(dirs).toEqual([
      'dir-1',
      'dir-2',
      'dir-3'
    ])
  })
})
