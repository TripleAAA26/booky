import { create } from 'zustand'

import { Book } from '../../types.ts'


interface cartStoreType {
    booksToBuy: Book[]
    addBooksToBuy: (book: Book) => void
    addAllBooksToBuy: (books: Book[]) => void
    removeBooksToBuy: (book: Book) => void
    clearStore: () => void
}

const useCartStore  = create<cartStoreType>()((set) => ({
    booksToBuy: [],
    addBooksToBuy: (book: Book) =>
        set( (store) =>
            ({ booksToBuy: [ ...store.booksToBuy, book ] })),
    addAllBooksToBuy: (books: Book[]) =>
        set( (store) =>
            ({ booksToBuy: [ ...store.booksToBuy, ...books ] })),
    removeBooksToBuy: (book: Book) =>
        set((store) =>
            ({  booksToBuy: store.booksToBuy.filter((item) => item.id !== book.id) })),
    clearStore: () => set({ booksToBuy: [] }),
}))

export default useCartStore