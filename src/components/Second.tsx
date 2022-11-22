import React from 'react'
import { useEffect } from 'react'


interface Props {
    calculation:(number: number) => void
}

const Second:React.FC<Props> = ({calculation}:Props) => {

useEffect(()=> {
    fetch("https://api.covidtracking.com/v1/us/current.json").then((res) => console.log(res))

},[calculation])




  return (
    <div>second</div>
  )
}

export default Second