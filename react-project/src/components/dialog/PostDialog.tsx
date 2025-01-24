import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Post } from '@/types/Post'

type PostDialogProps = {
  isOpen: boolean
  setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>
  post: Post | null
  onSave: (post: Post) => void
}

const PostDialog: React.FC<PostDialogProps> = ({ isOpen, setIsDialogOpen, post, onSave }) => {
  const [title, setTitle] = useState<string>(post?.title || '')
  const [body, setBody] = useState<string>(post?.body || '')

  useEffect(() => {
    if (post) {
      setTitle(post.title)
      setBody(post.body)
    }
  }, [post])

  function handleSave() {
    if (post) {
      onSave({ ...post, title, body })
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsDialogOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{post ? 'Edit' : 'Add'} post</DialogTitle>
        </DialogHeader>
        <DialogDescription></DialogDescription>
        <div>
          <div className="mb-8">
            <div className="space-y-1">
              <Label htmlFor="title">Title</Label>
              <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="col-span-3" />
            </div>
            <br />

            <div className="space-y-1">
              <Label htmlFor="body">Body</Label>
              <Input id="body" value={body} onChange={(e) => setBody(e.target.value)} className="col-span-3" />
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSave}>Save {post && 'Changes'}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PostDialog
