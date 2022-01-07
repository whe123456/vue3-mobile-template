import { computed } from 'vue'
import {
    mapGetters,
    mapState,
    useStore,
    createNamespacedHelpers,
    Computed,
    Mapper,
    MapperForState,
    MapperForStateWithNamespace,
    MapperWithNamespace,
    mapMutations,
} from 'vuex'

const useMapper = (
    mapper: any,
    mapFn: Mapper<Computed> &
        MapperWithNamespace<Computed> &
        MapperForState &
        MapperForStateWithNamespace,
    isFn = false
) => {
    const store = useStore()

    const storeStateFns = mapFn(mapper)
    const storeState: any = {}
    Object.keys(storeStateFns).forEach((keyFn) => {
        const fn = storeStateFns[keyFn].bind({ $store: store })
        storeState[keyFn] = isFn ? fn : computed(fn)
    })

    return storeState
}

export const useMutations = (moduleName: string | any[], mapper?: any) => {
    let mapperFn = mapMutations
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapMutations
    } else {
        mapper = moduleName
    }
    return useMapper(mapper, mapperFn, true)
}
export const useState = (moduleName: string | any[], mapper?: any) => {
    let mapperFn = mapState
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapState
    } else {
        mapper = moduleName
    }
    return useMapper(mapper, mapperFn)
}

export const useGetters = (moduleName: string | any[], mapper?: any) => {
    let mapperFn = mapGetters
    if (typeof moduleName === 'string' && moduleName.length > 0) {
        mapperFn = createNamespacedHelpers(moduleName).mapGetters
    } else {
        mapper = moduleName
    }
    return useMapper(mapper, mapperFn)
}
