import { Server as SocketIOServer } from 'socket.io'
import { NextApiRequest, NextApiResponse } from 'next'

const SocketHandler = (req: NextApiRequest, res: NextApiResponse) => {
  if (!(res.socket as any).server.io) {
    console.log('Socket is initializing')
    const io = new SocketIOServer((res.socket as any).server)
    ;(res.socket as any).server.io = io

    io.on('connection', socket => {
      socket.on('send-message', msg => {
        io.emit('receive-message', msg)
      })
    })
  }
  res.end()
}

export default SocketHandler
