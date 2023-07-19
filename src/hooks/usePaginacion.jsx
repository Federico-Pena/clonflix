import { useState } from 'react'

function usePaginacion() {
	const [pagePPList, setpagePPList] = useState(1)
	const [pagePVList, setpagePVList] = useState(1)
	const [pageSPList, setpageSPList] = useState(1)
	const [pageSVList, setpageSVList] = useState(1)
	const [pageTendenciaP, setpageTendenciaP] = useState(1)
	const [pageTendenciaS, setpageTendenciaS] = useState(1)
	const [pageSAccion, setpageSAccion] = useState(1)
	const [pagePAccion, setpagePAccion] = useState(1)

	const [pageMulti, setpageMulti] = useState(1)

	const setPagPPlist = () => {
		setpagePPList((prev) => prev + 1)
	}
	const setPagPVList = () => {
		setpagePVList((prev) => prev + 1)
	}
	const setPagSPList = () => {
		setpageSPList((prev) => prev + 1)
	}
	const setPagSVList = () => {
		setpageSVList((prev) => prev + 1)
	}
	const setPagTendenciaP = () => {
		setpageTendenciaP((prev) => prev + 1)
	}
	const setPagTendenciaS = () => {
		setpageTendenciaS((prev) => prev + 1)
	}
	const setPagSAccion = () => {
		setpageSAccion((prev) => prev + 1)
	}
	const setPagPAccion = () => {
		setpagePAccion((prev) => prev + 1)
	}
	const setPagMulti = () => {
		setpageMulti((prev) => prev + 1)
	}
	return {
		pagePPList,
		pagePVList,
		pageSVList,
		pageSPList,
		pageTendenciaP,
		pageTendenciaS,
		pageSAccion,
		pagePAccion,
		pageMulti,
		setPagTendenciaP,
		setPagPPlist,
		setPagPVList,
		setPagSPList,
		setPagSVList,
		setPagTendenciaS,
		setPagSAccion,
		setPagPAccion,
		setPagMulti,
	}
}

export default usePaginacion
