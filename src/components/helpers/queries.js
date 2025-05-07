import axios from "axios";

const url_usuarios = import.meta.env.VITE_Usuarios;
const url_usuariosR = import.meta.env.VITE_UsuariosR;
const url_recetas = import.meta.env.VITE_Recetas;
const url_misRecetas = import.meta.env.VITE_MisRecetas;

export const registrarUsuario = async (datos) => {
    try {
      const respuesta = await axios.post(url_usuariosR, datos, {
        headers: {
          "Content-Type": "application/json"
        }
      });
  
      return respuesta.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  

export const iniciarSesion =  async (usuario)=>{
    console.log(usuario);

    try {

        const respuesta = await axios.request({
           url: url_usuarios,
           method: 'POST',
           headers: {
            "Content-Type": "application/json"
        },
        data: usuario
        })
        const usuario_Buscado = respuesta.data
        console.log(usuario_Buscado)
        //buscar si en listadousuarios hay un usuario iguel al que recibi por parametros

       

        if(usuario_Buscado){
            console.log("Email encontrado")
            //verificar si la contraseña es igual
            return usuario_Buscado
            
        }else{
            console.log("email incorrecto");
            return null;
        }
        
    } catch (error) {
        console.log(error);
        return null;
    }
}

export const obtenerRecetas = async ()=>{
    try {

        const respuesta = await axios.get(url_recetas);
        const listaRecetas = respuesta.data
        return listaRecetas;
        
    } catch (error) {
        console.log(error);
        return null
        
    }

}
export const obtenerUnaReceta = async (id)=>{
    try {

        const respuesta = await axios.get(`${url_recetas}/${id}`);
        const recetaEditar= respuesta.data
        return recetaEditar;
        
    } catch (error) {
        console.log(error);
        return null
        
    }

}

export const consultaEliminarReceta = async (id) => {
    const usuarioLocal = JSON.parse(localStorage.getItem("usuario")) || {};
  
    try {
      const respuesta = await axios.request({
        url: `${url_recetas}/${id}`,
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${usuarioLocal.token}`
        }
      });
  
      return respuesta;
    } catch (error) {
      console.log(error);
      return null;
    }
  };
  
  export const consultaCrearReceta = async (receta) => {
    const usuarioLocal = JSON.parse(localStorage.getItem("usuario")) || {};
    try {
        const respuesta = await axios.request({
            url: url_recetas,
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${usuarioLocal.token}`
            },
            data: receta
        });
        return respuesta.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const consultaEditarReceta = async (receta, id) => {
    const usuarioLocal = JSON.parse(localStorage.getItem("usuario")) || {};
    try {
        const respuesta = await axios.request({
            url: `${url_recetas}/${id}`,
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${usuarioLocal.token}`
            },
            data: receta
        });
        return respuesta.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const obtenerMisRecetas = async () => {
    const usuarioLocal = JSON.parse(localStorage.getItem("usuario")) || {};
    console.log("Token enviado:", usuarioLocal.token); 
    try {
        const respuesta = await axios.get(url_misRecetas, {
            headers: {
                "Authorization": `Bearer ${usuarioLocal.token}`
            }
        });
        console.log("Respuesta recetas:", respuesta.data);
        return respuesta.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};
export const obtenerMiRecetaPorId = async (id) => {
    const usuarioLocal = JSON.parse(localStorage.getItem("usuario")) || {};
    try {
        const respuesta = await axios.get(`${url_misRecetas}/${id}`, {
            headers: {
                "Authorization": `Bearer ${usuarioLocal.token}`
            }
        });
        return respuesta.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

