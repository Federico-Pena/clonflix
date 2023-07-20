import { useState } from 'react'

function usePageSerie() {
	const [pageSPList, setpageSPList] = useState(1)
	const [pageSVList, setpageSVList] = useState(1)
	const [pageTendenciaS, setpageTendenciaS] = useState(1)
	const [pageActionS, setpageActionS] = useState(1)
	const [pageAnimatS, setpageAnimatS] = useState(1)
	const [pageComediaS, setpageComediaS] = useState(1)
	const [pageFamiliaS, setpageFamiliaS] = useState(1)
	const [pageMisterioS, setpageMisterioS] = useState(1)
	const [pageMulti, setpageMulti] = useState(1)

	const setPagSPList = () => {
		setpageSPList((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPagSVList = () => {
		setpageSVList((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPagTendenciaS = () => {
		setpageTendenciaS((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPagActionS = () => {
		setpageActionS((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPagAnimatS = () => {
		setpageAnimatS((prev) => (prev < 499 ? prev + 1 : prev))
	}

	const setPagComediaS = () => {
		setpageComediaS((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPagFamiliaS = () => {
		setpageFamiliaS((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPagMisterioS = () => {
		setpageMisterioS((prev) => (prev < 499 ? prev + 1 : prev))
	}
	const setPagMulti = () => {
		setpageMulti((prev) => (prev < 499 ? prev + 1 : prev))
	}
	return {
		pageSVList,
		pageSPList,
		pageTendenciaS,
		pageActionS,
		pageAnimatS,
		pageComediaS,
		pageFamiliaS,
		pageMisterioS,
		pageMulti,
		setPagSPList,
		setPagSVList,
		setPagTendenciaS,
		setPagActionS,
		setPagAnimatS,
		setPagComediaS,
		setPagFamiliaS,
		setPagMisterioS,
		setPagMulti,
	}
}

export default usePageSerie
