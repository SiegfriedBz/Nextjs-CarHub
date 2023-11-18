import { create } from 'zustand'

/** MOBILE MENU */
type MobileMenuStateType = {
  isMobileMenuOpen: boolean
}

type MobileMenuActionsType = {
  toggleMobileMenu: () => void
  closeMobileMenu: () => void
}

type useMobileMenuType = MobileMenuStateType & MobileMenuActionsType

const useMobileMenuStore = create<useMobileMenuType>((set) => ({
  isMobileMenuOpen: false,
  toggleMobileMenu: () =>
    set((state) => ({ isMobileMenuOpen: !state.isMobileMenuOpen })),
  closeMobileMenu: () => set({ isMobileMenuOpen: false }),
}))

export default useMobileMenuStore
