import { atom } from "recoil";

const favoritesAtom = atom({
	key: 'favorites',
	default: []
})

export { favoritesAtom }