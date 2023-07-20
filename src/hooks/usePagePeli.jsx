import { useState } from 'react'

function usePagePeli() {
	const [pagePPList, setpagePPList] = useState(1)
	const [pagePVList, setpagePVList] = useState(1)
	const [pageTendenciaP, setpageTendenciaP] = useState(1)
	const [pageActionP, setpageActionP] = useState(1)
	const [pageAnimatP, setpageAnimatP] = useState(1)
	const [pageAventuraP, setpageAventuraP] = useState(1)
	const [pageComediaP, setpageComediaP] = useState(1)
	const [pageFamiliaP, setpageFamiliaP] = useState(1)
	const [pageMisterioP, setpageMisterioP] = useState(1)

	const [pageMulti, setpageMulti] = useState(1)

	const setPagPPlist = () => {
		setpagePPList((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPagPVList = () => {
		setpagePVList((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPagTendenciaP = () => {
		setpageTendenciaP((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPageActionP = () => {
		setpageActionP((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPageAnimatP = () => {
		setpageAnimatP((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPageAventuraP = () => {
		setpageAventuraP((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPageComediaP = () => {
		setpageComediaP((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPageFamiliaP = () => {
		setpageFamiliaP((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPageMisterioP = () => {
		setpageMisterioP((prev) => (prev < 499 ? prev + 1 : prev))
	}

	const setPagMulti = () => {
		setpageMulti((prev) => (prev < 499 ? prev + 1 : prev))
	}
	return {
		pagePPList,
		pagePVList,
		pageTendenciaP,
		pageActionP,
		pageMulti,
		pageAnimatP,
		pageAventuraP,
		pageComediaP,
		pageFamiliaP,
		pageMisterioP,
		setPageAventuraP,
		setPagTendenciaP,
		setPagPPlist,
		setPagPVList,
		setPageActionP,
		setPageAnimatP,
		setPagMulti,
		setPageComediaP,
		setPageFamiliaP,
		setPageMisterioP,
	}
}

export default usePagePeli
