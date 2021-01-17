import url from 'url'
const absoluteUrl = (req, setLocalhost) => {
  let protocol = 'https'
  let host = req ? req.headers.host : window.location.hostname
  if (host.indexOf('localhost') > -1) {
      if (setLocalhost) host = setLocalhost
      protocol = 'http'
  }

  return url.format({
      protocol,
      host,
      pathname: '/' // req.url
  })
}

export async function createEmp(props){
  console.log('sending data..')
  try{
    const baseUrl =  absoluteUrl(context.req, 'localhost:3000')
    const apiUrl = process.env.NODE_ENV === 'production' ? `${baseUrl}api/Employee` : `http://localhost:9999/api/Employee`
    const res = await fetch(apiUrl, {
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
    const baseUrl =  absoluteUrl(context.req, 'localhost:3000')
    const apiUrl = process.env.NODE_ENV === 'production' ? `${baseUrl}api/Employee/${props.Id}` : `http://localhost:9999/api/Employee/${props.Id}`
    const res = await fetch(apiUrl, {
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
    const baseUrl =  absoluteUrl(context.req, 'localhost:3000')
    const apiUrl = process.env.NODE_ENV === 'production' ? `${baseUrl}api/Employee/${props}` : `http://localhost:9999/api/Employee/${props}`
    const res = await fetch(apiUrl, {method: 'DELETE'});
  }catch(e){
    console.log(e)
  }
}


export async function deleteAllEmp(){
  console.log('deleting All..')
  try{
    const baseUrl =  absoluteUrl(context.req, 'localhost:3000')
    const apiUrl = process.env.NODE_ENV === 'production' ? `${baseUrl}api/Employee` : `http://localhost:9999/api/Employee`
    const res = await fetch(apiUrl, {method: 'DELETE'});
  }catch(e){
    console.log(e)
  }
}



export async function getEmpId(props){
  console.log('fetching employee')
   try{
    const baseUrl =  absoluteUrl(context.req, 'localhost:3000')
    const apiUrl = process.env.NODE_ENV === 'production' ? `${baseUrl}api/Employee/${props}` : `http://localhost:9999/api/Employee/${props}`
    const res = await fetch(apiUrl, {method: 'GET'});
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



