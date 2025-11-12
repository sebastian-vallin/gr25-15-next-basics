import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl mb-4">Home</h1>

      {/* <Button size="lg" className="text-lg font-bold" asChild>
        <Link href="/about">
          About Us
          <span>hello</span>
        </Link>
      </Button> */}

      <Dialog>
        <DialogTrigger asChild>
          <Button>Open Dialog</Button>
        </DialogTrigger>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Are you absolutely sure?</DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </DialogDescription>
          </DialogHeader>

          {/* Main Content of Dialog */}
          <form>
            <label className="pr-2">Test</label>
            <input />
          </form>

          <DialogFooter className="sm:justify-start">
            <Button variant="destructive">Delete</Button>

            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
