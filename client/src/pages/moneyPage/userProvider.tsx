import { createContext, useState, useContext } from 'react';
import { ReactNode } from 'react';



export const UserContext = createContext<string | undefined>(undefined);

