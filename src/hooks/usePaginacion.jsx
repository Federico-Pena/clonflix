import { useState } from 'react'

function usePaginacion() {
	const [pagePPList, setpagePPList] = useState(1)
	const [pagePVList, setpagePVList] = useState(1)
	const [pageSPList, setpageSPList] = useState(1)
	const [pageSVList, setpageSVList] = useState(1)

	const setPagPPlist = () => {
		setpagePPList((prev) => prev + 1)
	}
	const setpagPVList = () => {
		setpagePVList((prev) => prev + 1)
	}
	const sePagSPList = () => {
		setpageSPList((prev) => prev + 1)
	}
	const setPagSVList = () => {
		setpageSVList((prev) => prev + 1)
	}
	return {
		pagePPList,
		pagePVList,
		pageSVList,
		pageSPList,
		setPagPPlist,
		setpagPVList,
		sePagSPList,
		setPagSVList,
	}
}

export default usePaginacion
