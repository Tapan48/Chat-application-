import { io, Socket } from 'socket.io-client'

let socket: Socket | null = null

export const initiateSocket = (): void => {
  socket = io()
  console.log('Connecting socket...')
}

export const disconnectSocket = (): void => {
  console.log('Disconnecting socket...')
  if (socket) socket.disconnect()
}

export const sendMessage = (message: string): void => {
  if (socket) socket.emit('send-message', message)
}

export const subscribeToMessages = (cb: (msg: string) => void): void => {
  if (!socket) return
  socket.on('receive-message', (msg: string) => {
    console.log('Received message:', msg)
    cb(msg)
  })
}
