import React from 'react'
import CreateModal from '../components/EmployeeComponents/CreateModal'
import DeleteModal from '../components/EmployeeComponents/DeleteModal'
import Table from '../components/EmployeeComponents/Table'
import axios from 'axios'
import { Container, ISourceOptions, MoveDirection, OutMode } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
import { loadSlim } from "@tsparticles/slim";


function Employee() {
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
  const [init, setInit] = useState(false);

  const [rows, setRows] = React.useState([])
  React.useEffect(() => {
    find()
  }, []);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
       
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
    localStorage.removeItem("token");

  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "#111827",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "out",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );
  return (
    <div>
{/* {init && (
          <Particles id="tsparticles" particlesLoaded={particlesLoaded} options={options} />
        )} */}
      <CreateModal onClose={()=> {
setIsOpen(false)
      }}
      onSubmit={onSubmit} isOpen={isOpen && mode === 'create'}
      />
      <DeleteModal onClose={()=> {
setIsOpen(false)
      }}
      onDelete={
        (id: any) => {
          delet(selected)
        }
      } isOpen={isOpen && mode === 'delete'}
      />
      <header>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">Empleados</h1>
            </div>
          </header>
        <Table
        OpenCreateModal={() => {
          setIsOpen(true)
          setMode('create')
        }}
        OpenDeleteModal={(id: any) => {
          setIsOpen(true)
          setMode('delete')
          setSelected(id)
        }}
        rows={
          [
            {
              id: 1,
              name: 'Pedro',
              cedula: '123456789',
              tanda: '8-5',
              percentage: '25%',
              date: '07/03/2024',
            },
          ]
        }
        cols={[
          'Identificador', 'Nombre', 'cedula', 'Porciento Comision', 'Tanda Laboral', 'Fecha de Ingreso',
        ]}
        />
        </div>
    
  )
}

export default Employee