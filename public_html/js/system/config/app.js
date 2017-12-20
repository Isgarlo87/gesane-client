/*
 * Copyright (c) 2017-2018 
 *
 * by Rafael Angel Aznar Aparici (rafaaznar at gmail dot com) & DAW students
 * 
 * GESANE: Free Open Source Health Management System
 *
 * Sources at:
 *                            https://github.com/rafaelaznar/gesane-server
 *                            https://github.com/rafaelaznar/gesane-client
 *                            https://github.com/rafaelaznar/gesane-database
 *
 * GESANE is distributed under the MIT License (MIT)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
'use strict';

var trolleyes = angular.module('myApp', [
    'ngRoute',
    'Filters',
    'Services',
    'Directives',
    'systemControllers',
    'usuarioControllers',
    'tipousuarioControllers',
    'pedidoControllers',
    'destinoaltaControllers',
    'productoControllers',
    'linea_pedidoControllers',
    'sexoControllers',
    'circunstanciasaltaControllers',
    'pacienteControllers',
    'episodioControllers',
    'tipopagoControllers',
    'tiposervicioControllers',
    'especialidadControllers',
    'modalidadepisodioControllers',
    'tipodependeciaControllers',
    'tipoepisodioControllers',
    'facturaControllers',
    'servicioControllers',
    'grupoControllers',
    'cursoControllers',
    'pacienteControllers',
    'centroControllers',
    'centrosanitarioControllers',
    'categoriaprofesionalControllers',
    'medicoControllers',
    'ui.bootstrap',
    'ngSanitize',
    'chart.js'
]);
//-------------
var moduloSistema = angular.module('systemControllers', []);
//-------------
var moduloDirectivas = angular.module('Directives', []);
var moduloServicios = angular.module('Services', []);
var moduloFiltros = angular.module('Filters', []);
//-------------
var moduloUsuario = angular.module('usuarioControllers', []);
var moduloTipousuario = angular.module('tipousuarioControllers', []);
var moduloPedido = angular.module('pedidoControllers', []);
var moduloDestinoalta = angular.module('destinoaltaControllers', []);
var moduloProducto = angular.module('productoControllers', []);
var moduloLinea_pedido = angular.module('linea_pedidoControllers', []);
var moduloTipoepisodio = angular.module('tipoepisodioControllers', []);
var moduloSexo = angular.module('sexoControllers', []);
var moduloCircunstanciasalta = angular.module('circunstanciasaltaControllers', []);
var moduloEpisodio = angular.module('episodioControllers', []);
var moduloTipopago = angular.module('tipopagoControllers', []);
var moduloEspecialidad = angular.module('especialidadControllers', []);
var moduloPaciente = angular.module('pacienteControllers', []);

var moduloFactura = angular.module('facturaControllers', []);

var moduloTiposervicio = angular.module('tiposervicioControllers', []);
var moduloModalidadepisodio = angular.module('modalidadepisodioControllers', []);
var moduloServicio = angular.module('servicioControllers', []);
//------------
var moduloTipodependencia = angular.module('tipodependeciaControllers', []);
var moduloGrupo= angular.module('grupoControllers', []);
var moduloCurso= angular.module('cursoControllers', []);
var moduloPaciente= angular.module('pacienteControllers', []);
var moduloCentro= angular.module('centroControllers', []);
var moduloCentrosanitario= angular.module('centrosanitarioControllers', []);
var moduloCategoriaprofesional= angular.module('categoriaprofesionalControllers', []);


var moduloMedico= angular.module('medicoControllers', []);


