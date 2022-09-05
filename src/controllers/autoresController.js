import autores from '../models/Autor.js';

class AutorController {

  static listarAutor = (req, res) => {
    autores.find((err, autor) => {
      res.status(200).json(autor)
    });
  }

  static listarAutorPorId = (req, res)=>{
    const id = req.params.id;

    autores.findById(id,(err, autor)=>{
      if(err){
        res.status(400).send({message:`${err.message} - Id do Autor nao localizado.`});
      }else{
        res.status(200).send(autor);
      }
    });
  }

  static cadastrarAutor = (req, res) =>{
    let autor = new autores(req.body);
    autor.save((err)=>{
      if(err){
        res.status(500).send({message:`${err.message} - falha ao cadastrar Autor`})
      }else{
        res.status(201).send(autor.toJSON())
      }
    })
  }

  static actualizarAutor = (req, res) => {
    const id = req.params.id;
    
    autores.findByIdAndUpdate(id, {$set: req.body}, (err)=>{
      if(!err){
        res.status(200).send({message: 'Autor actualizado com sucesso'})
      }else{
        res.status(500).send({message:err.message})
      }
    });
  }

  static excluirAutor = (req, res) => {
    const id = req.params.id;

    autores.findOneAndDelete(id,(err)=>{
      if(!err){
        res.status(200).send({message:'Autor excluido com sucesso'});
      }else{
        res.status(500).send({message:err.message});
      }
    })
  }
}

export default AutorController;