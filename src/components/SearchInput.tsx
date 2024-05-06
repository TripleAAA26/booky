import React, { useState } from 'react'
import { Select } from 'antd'
import type { SelectProps } from 'antd'
import { useNavigate } from 'react-router-dom'

import { getBooks } from '../services/booksApi.ts'
import { Book } from '../../types.ts'


let timeout: ReturnType<typeof setTimeout> | null

const fetch = (value: string, callback:  React.Dispatch<React.SetStateAction<SelectProps['options'] | undefined>>) => {
    if (timeout) {
        clearTimeout(timeout)
        timeout = null
    }

    const fake = async () => {
        const data = await getBooks()

        const filteredResults = data?.filter((item: Book) =>
            item.name.toLowerCase().includes(value.toLowerCase())
        )

        callback(filteredResults)
    }

    if (value) {
        timeout = setTimeout(fake, 300)
    } else {
        callback([])
    }
}

const SearchInput = (props: { placeholder: string; style: React.CSSProperties }) => {
    const [ data, setData ] = useState<SelectProps['options']>([])
    const [ value, setValue ] = useState<string>()
    const navigate = useNavigate()

    const handleSearch = (newValue: string) => {
        fetch(newValue, setData)
    }

    const handleChange = (newValue: string) => {
        setValue(newValue)
    }

    const handleSelect = (selected: string) => {
        navigate(`/book/${selected}`)
        setValue('')
        setData([])
    }

    return (
        <Select
            showSearch
            value={value}
            placeholder={props.placeholder}
            style={props.style}
            defaultActiveFirstOption={false}
            suffixIcon={null}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            onSelect={handleSelect}
            notFoundContent={null}
            options={(data || []).map((d) => ({
                value: d.id,
                label: d.name,
                key: d.id,
            }))}
        />
    )
}

export default SearchInput