package com.frazao.lacodeamorrest.modelo;

import java.io.Serializable;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@EqualsAndHashCode
@ToString
public abstract class EntidadeBase implements Serializable {

	private static final long serialVersionUID = 1L;

}
