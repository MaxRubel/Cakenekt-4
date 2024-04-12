/* eslint-disable react/prop-types */
export default function MessageCard({ message }) {

  return (
    <div className="text-message">
      Player {message.player}: {message.message}
    </div>

  )
}