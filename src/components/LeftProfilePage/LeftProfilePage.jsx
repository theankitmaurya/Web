import React from 'react'
import SearchBar from '../SearchBar/SearchBar'
import Skills from '../Skills/Skills'
import Communities from '../Communities/Communities'
import Bio from '../Bio/Bio'

const LeftProfilePage = () => {
  return (
    <div className="hidden md:flex flex-col gap-4 items-center overflow-auto">
      <SearchBar />
      <Bio />
      <Skills />
      <Communities />
    </div>
  )
}

export default LeftProfilePage
