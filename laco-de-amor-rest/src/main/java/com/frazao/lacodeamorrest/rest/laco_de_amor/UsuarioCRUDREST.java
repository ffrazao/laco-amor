package com.frazao.lacodeamorrest.rest.laco_de_amor;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.frazao.lacodeamorrest.bo.laco_de_amor.UsuarioBO;
import com.frazao.lacodeamorrest.modelo.dto.laco_de_amor.AutorizarTrocarSenhaDTO;
import com.frazao.lacodeamorrest.modelo.dto.laco_de_amor.RecuperarSenhaDTO;
import com.frazao.lacodeamorrest.modelo.dto.laco_de_amor.TrocarSenhaDTO;
import com.frazao.lacodeamorrest.modelo.dto.laco_de_amor.UsuarioFiltroDTO;
import com.frazao.lacodeamorrest.modelo.entidade.laco_de_amor.Usuario;
import com.frazao.lacodeamorrest.rest.CRUDREST;

@RestController
@RequestMapping(value = "usuario")
public class UsuarioCRUDREST extends CRUDREST<Usuario, Integer, UsuarioFiltroDTO, UsuarioBO> {

	public UsuarioCRUDREST(@Autowired final UsuarioBO bo) {
		super(bo);
	}

	@PostMapping("autorizar-trocar-senha")
	public void autorizarTrocarSenha(@Valid @RequestBody final AutorizarTrocarSenhaDTO valor) throws Exception {
		this.getBO().autorizarTrocarSenha(valor);
	}

	@PostMapping("recuperar-senha")
	public void recuperarSenha(@Valid @RequestBody final RecuperarSenhaDTO valor) throws Exception {
		this.getBO().recuperarSenha(valor);
	}

	@PostMapping("trocar-senha")
	public void trocarSenha(@Valid @RequestBody final TrocarSenhaDTO valor) throws Exception {
		this.getBO().trocarSenha(valor);
	}

}
