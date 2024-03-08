import React from 'react'
import CreateModal from '../components/ItemComponent/CreateModal'
import DeleteModal from '../components/ItemComponent/DeleteModal'
import Table from '../components/ItemComponent/Table'
import axios from 'axios'


function Item() {
  const onSubmit = async (data: any) => {
    await fetch('http://localhost:8081/Generos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then(() => {
      find()
    }
    )
  
  }
  const find = async () => {
    axios.get('http://localhost:8081/Generos',{
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'GET',
      
      }).then((response: { data: React.SetStateAction<never[]> }) => {
        setRows(response.data);
        setIsOpen(false)
      });
  } 
  const delet = async (id: any) => {
    axios.delete(`http://localhost:8081/Generos/${selected}`,{
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'DELETE',
      }).then(() => {
        find()
        setIsOpen(false)
      });
  }

  const [isOpen, setIsOpen] = React.useState(false)
  const [mode, setMode] = React.useState('create')
  const [selected , setSelected] = React.useState(0)
  const [selectedData , setData] = React.useState({})

  const [rows, setRows] = React.useState([])
  React.useEffect(() => {
    // find()
  }, []);
  const data = [
    {
        title: 'Endgame',
        description: 'Los vengadores se unen por ultima vez para derrotar a Thanos',
        price: 29.99,
    },
    {
        title: 'The ides of march',
        description: 'Un joven idealista se une a la campaña de un candidato presidencial',
        price: 19.99,
    },
    
    // Add more data items as needed
];
  return (
    <div>
     <CreateModal setOpen={()=> {
setIsOpen(false)
      }
      }
      open={isOpen}
      product={{
  name: "The ides of march",
  descripcion: "Un joven idealista se une a la campaña de un candidato presidencial",
  price: '$19.99',
  href: '#',
  imageSrc: './LOS-IDUS-DE-MARZO.jpg',
  imageAlt: "",
}}
      />
      <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">Articulos</h1>
            </div>
          </header>
          <Table data={data} onSelectItem={(data: any)=>{
            setIsOpen(true)
            setData(data)
          }}/>
        </div>
    
  )
}

export default Item