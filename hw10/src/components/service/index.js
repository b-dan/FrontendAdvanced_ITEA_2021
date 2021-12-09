async function request(url){
    const data = await fetch(url);
    return data.json();
}

export default request;