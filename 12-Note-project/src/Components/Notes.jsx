import React from 'react'

const Notes = ({ elem,idx,deleteNote }) => {
  return (
    <div
      className="flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]"
    >
      <div>
        <h3 className="leading-tight text-lg font-bold">
          {elem.title}
        </h3>

        <p className="mt-2 leading-tight text-xs font-semibold text-gray-600">
          {elem.detail}
        </p>
      </div>

      <button
        onClick={() => {
          deleteNote(idx)
        }}
        className="w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white"
      >
        Delete
      </button>
    </div>
  )
}

export default Notes