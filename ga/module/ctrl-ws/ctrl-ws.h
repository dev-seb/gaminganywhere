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

#ifndef __CTRL_WS_H__
#define __CTRL_WS_H__

#include "ga-common.h"
#include "ga-module.h"
#include "rtspconf.h"

int ctrl_ws_init(void *arg);
int ctrl_ws_deinit(void *arg);

int ctrl_ws_start(void *arg);
int ctrl_ws_stop(void *arg);

#endif /* __CTRL_WS_H__ */
