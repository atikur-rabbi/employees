export async function createEmp(props){
  console.log('sending data..')
  try{
    const res = await fetch(`http://localhost:2020/Employee`, {
      method: 'POST',
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        first_name:props.First,
        last_name:props.Last,
        is_active:props.Act,
        date_of_birth:props.Date
      })
    });
  }catch(e){
    console.log(e)
  }
}

export async function updateEmp(props){
  console.log('updating..')
  try{
    const res = await fetch(`http://localhost:2020/Employee/${props.Id}`, {
      method: 'PUT',
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json'
      },
      body: JSON.stringify({
        first_name:props.First,
        last_name:props.Last,
        is_active:props.Act,
        date_of_birth:props.Date,
      })
    });
  }catch(e){
    console.log(e)
  }
}


export async function deleteEmp(props){
  console.log('deleting..')
  try{
    const res = await fetch(`http://localhost:2020/Employee/${props}`, {method: 'DELETE'});
  }catch(e){
    console.log(e)
  }
}


export async function deleteAllEmp(){
  console.log('deleting All..')
  try{
    const res = await fetch(`http://localhost:2020/Employee`, {method: 'DELETE'});
  }catch(e){
    console.log(e)
  }
}



export async function getEmpId(props){
  console.log('fetching employee')
   try{
    const res = await fetch(`http://localhost:2020/Employee/${props}`, {method: 'GET'});
    const data = await res.json()
    if(!data)
    return {
      notFound: true,
    }
    return {
      props:{
        data,
      },
    }}catch(e) {
        console.log(e)
      }
}











// TODO: export all function together



