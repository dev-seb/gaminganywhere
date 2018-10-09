/*
 * This file is part of GamingAnywhere (GA).
 *
 * GA is free software; you can redistribute it and/or modify it
 * under the terms of the 3-clause BSD License as published by the
 * Free Software Foundation: http://directory.fsf.org/wiki/License:BSD_3Clause
 *
 * GA is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 *
 * You should have received a copy of the 3-clause BSD License along with GA;
 * if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

#include <stdio.h>

#include "ga-common.h"
#include "ga-conf.h"
#include "controller.h"
#include "ctrl-websocket.h"

#include "rtspconf.h"


int
wsmsg_replay_init(void *arg) {

	// TODO: 

	return 0;
}

int
wsmsg_replay_deinit(void *arg) {

	// TODO;

	return 0;
}

#ifdef GA_MODULE
ga_module_t *
module_load() {
	static ga_module_t m;
	bzero(&m, sizeof(m));
	m.type = GA_MODULE_TYPE_CONTROL;
	m.name = strdup("control-websocket");
	m.init = wsmsg_replay_init;
	m.deinit = wsmsg_replay_deinit;
	return &m;
}
#endif

