export interface Vote {
     user_id: string;
     vote: 'Esittim' | 'Esitip atırman' | 'Esitejaqpan' | 'Usınıs etemen'
}

export interface Comment {
    user_id: string
    user_name: string
    rating: number
    text: string
}

export interface AudioType {
    section: string
    audioUrl: string
}

export interface Book {
    id: string
    name: string
    author: string
    description: string
    category: string
    narrator: string
    genre: string[]
    price: number
    image_url: string
    votes: Vote[],
    comments: Comment[]
    audio: AudioType[]
}

export interface User {
    id: string
    username: string
    phone: string
    password: string
    favorite_books: string[]
    my_books: string[]
    cart: string[]
}

export interface Feedback {
    id: string
    username: string
    rating: number
    text: string
}