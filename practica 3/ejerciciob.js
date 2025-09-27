function verificarUsuario(usuario){
    return new Promise ((res, err) => {
        if(usuario  === "admin"){
            res("acceso concedido");
        }else{
            err ("acceso denegado");
        }
    })
}

verificarUsuario("admin")
.then(res => console.log(res))
.catch(err => console.log(err));

verificarUsuario("ivan")
.then(res => console.log(res))
.catch(err => console.log(err));