import ContactService from "services/ContactService";
import { formatMoney } from "utils/string";

class Constructor {
    list: any[] = [];
    payload = {
        start: 0,
        limit: 10,
        keyword: ""
    }
    meta = {
        length: 1,
        page: 1
    };


    setPagination(page: number) {
        this.meta.page = page;
        this.payload.start = (page - 1) * this.payload.limit;
    }

    setKeyword(keyword: string) {
        this.payload.keyword = keyword;
    }

    setPayload(newVal: typeof this.payload) {
        this.payload = newVal;
    }

    async get() {
        const service = new ContactService();
        const data = await service.get();
        console.log({ data })
        this.list = data;
    }

    setList(list: any[]) {
        this.list = list.map((item: any) => {
            const price = "Rp " + formatMoney(item.price)
            return {...item, price}
        });
    }
}

export default new Constructor();

