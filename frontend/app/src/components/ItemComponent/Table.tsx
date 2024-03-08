import React from 'react';

function Table({ data, onSelectItem }: { data: any[], onSelectItem: any}) {
    return (
        <section className="container mx-auto p-10 md:py-12 px-0 md:p-8 md:px-0 dark:bg-gray-900">
            <section className="p-5 md:p-0 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 items-start">
                {data.map((item, index) => (
                    <section key={index} className={`p-5 py-10 dark:bg-gray-950 text-center transform duration-500 hover:-translate-y-2 cursor-pointer rounded-md`}>
                        
                        <h1 className="text-2xl my-5 text-white">{item.title}</h1>
                        <p className="mb-5 text-white">{item.description}</p>
                        <h2 className="font-semibold mb-5 text-yellow-300">{`$${item.price}`}</h2>
                        <button className={`p-2 px-6 bg-blue-500 text-white rounded-md hover:bg-${item.color}-600`} onClick={()=>{
                            onSelectItem(item)
                        }}>reservar</button>
                    </section>
                ))}
            </section>
        </section>
    );
}

export default Table;
