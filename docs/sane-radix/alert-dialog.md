# Sane Radix: Alert Dialog

```jsx
<AlertDialog.Root>
  <AlertDialog.Trigger asChild>
    <button
      className="rounded-md p-2 hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer"
      aria-label="Delete account"
    >
      <LucideTrash2 />
    </button>
  </AlertDialog.Trigger>
  <AlertDialog.Portal>
    <AlertDialog.Overlay className="fixed inset-0 bg-white/10" />
    <AlertDialog.Content className="fixed left-1/2 top-1/2 w-1/3 -translate-x-1/2 -translate-y-1/2 rounded-md bg-black p-8 focus:outline-none flex flex-col gap-4">
      <AlertDialog.Title className="text-lg font-semibold">
        Are you sure?
      </AlertDialog.Title>
      <AlertDialog.Description>
        This action cannot be undone. This will permanently delete your account.
      </AlertDialog.Description>
      <div className="flex justify-end gap-4">
        <AlertDialog.Cancel asChild>
          <button className="cursor-pointer inline-flex items-center justify-center rounded bg-white/80 hover:bg-white text-black px-4 py-2 font-medium outline-none outline-offset-1 select-none">
            Cancel
          </button>
        </AlertDialog.Cancel>
        <AlertDialog.Action asChild>
          <button
            className="cursor-pointer inline-flex items-center justify-center rounded-md bg-red-600/50 hover:bg-red-600/75 text-white/80 px-4 py-2 font-medium outline-none outline-offset-1 select-none"
            onClick={() => {deleteAccount()}}
          >
            Yes, delete account
          </button>
        </AlertDialog.Action>
      </div>
    </AlertDialog.Content>
  </AlertDialog.Portal>
</AlertDialog.Root>
```
