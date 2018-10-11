
include ../Makefile.common

ifeq ($(OS), Linux)
CFLAGS	+= $(WEBSOCKETPPCF)
LDFLAGS	+= $(WEBSOCKETPPLD)
endif

OBJS	= ctrl-ws.o
TARGET	= ctrl-ws.$(EXT)

include ../Makefile.build

