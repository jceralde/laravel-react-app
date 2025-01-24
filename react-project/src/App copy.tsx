import React, { useState, useEffect, useReducer } from 'react'
import { ToastContainer, toast } from 'react-toastify'

import Header from './components/header/Header'
import Logo from './components/header/Logo'
import PostDialog from './components/dialog/PostDialog'

import { Button } from '@/components/ui/button'

import { ModeToggle } from '@/components/mode-toggle'
import { ThemeProvider } from '@/components/theme-provider'

import { LoaderIcon, Pencil, Trash } from 'lucide-react'

import { Post } from './types/Post'
import Card from './components/Card'

// import reactLogo from "./assets/react.svg"
// import viteLogo from "/vite.svg"
// import "./App.css"
// import Portfolio from './components/Portfolio'

const BASE_URL: string = 'https://jsonplaceholder.typicode.com/posts'

export default function App() {
  // const [count, setCount] = useState<number>(0)

  const [data, setData] = useState<Post[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const [deleteId, setDeleteId] = useState<number | null>(null)
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false)

  const [editingItem, setEditingItem] = useState<Post | null>(null)

  const handleFetchData = () => {
    setIsLoading(true)
    setError(null)

    fetch(BASE_URL) // Replace with your API endpoint
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        return response.json()
      })
      .then((data) => {
        setData(data)
        setIsLoading(false)
      })
      .catch((error) => {
        setError(error.message)
        setIsLoading(false)
      })
  }

  const handleDeleteData = (id: number) => {
    setDeleteId(id)

    fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        toast.success('Post deleted successfully')

        setData((prevData) => prevData.filter((item) => item.id !== id))
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setDeleteId(null)
      })
  }

  const handleEditData = (item: Post) => {
    setEditingItem(item)
    setIsDialogOpen(true)
  }

  const handleSaveData = (post: Post) => {
    fetch(`${BASE_URL}/${post.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ post })
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }

        toast.success('Post saved successfully')

        setData(data.map((item) => (item.id === post.id ? post : item)))
      })
      .catch((error) => {
        setError(error.message)
      })
      .finally(() => {
        setIsDialogOpen(false)
      })
  }

  return (
    <ThemeProvider defaultTheme="light">
      <div>
        <Header>
          <Logo />
          <ModeToggle />
        </Header>

        <main className="container mx-auto h-full p-4">
          <Card>Test</Card>

          {data.length === 0 && <Button onClick={handleFetchData}>Fetch Data</Button>}
          {isLoading && <div>Loading...</div>}
          {error && <div>Error: {error}</div>}
          <div className="mt-8 space-y-4">
            {data.map((item, i) => (
              <div key={i} className="flex items-start gap-x-4">
                <div className="flex">
                  <Button onClick={() => handleEditData(item)} variant="ghost" size="icon" className="group shrink-0">
                    <Pencil className="text-gray-400 group-hover:text-blue-500" />
                  </Button>
                  {deleteId === item.id ? (
                    <LoaderIcon className="my-2 ml-2 mr-1 shrink-0 animate-spin" />
                  ) : (
                    <Button onClick={() => handleDeleteData(item.id)} variant="ghost" size="icon" className="group shrink-0">
                      <Trash className="text-gray-400 group-hover:text-red-500" />
                    </Button>
                  )}
                </div>

                <p>
                  <b>{item.title}</b>
                  <br />
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </main>

        {/* <p>{count}</p>
      <div className="">
        <button onClick={() => setCount(count + 1)} className="border">
          counter +1
        </button>
        <button onClick={() => setCount(count + 2)}>counter +2</button>
        <button onClick={() => setCount(count + 3)}>counter +3</button>
      </div> */}

        {/* <Portfolio /> */}
        <PostDialog post={editingItem} isOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} onSave={handleSaveData} />
        <ToastContainer autoClose={1500} position="bottom-right" />
      </div>
    </ThemeProvider>
  )
}
