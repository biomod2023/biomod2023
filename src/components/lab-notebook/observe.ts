const makeObserver = (elements: HTMLHeadingElement[], handleIntersection: (entries: IntersectionObserverEntry[]) => void) => {

    const observer = new IntersectionObserver(handleIntersection, {
        rootMargin: "0px 0px -60% 0px"
    })

    elements.forEach((element) => {
        observer.observe(element)
    })

    return observer
}

export default makeObserver