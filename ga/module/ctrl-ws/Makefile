
include ../Makefile.common

ifeq ($(OS), Linux)
CFLAGS	+= $(WEBSOCKETPPCF)
LDFLAGS	+= $(WEBSOCKETPPLD)
endif

ifeq ($(OS), MSYS)
LDFLAGS	+= ../../core/libga.dll -lws2_32
endif

OBJS	= ctrl-ws.o
TARGET	= ctrl-ws.$(EXT)

include ../Makefile.build

