import axios from "axios";

const apiKey = "79184968e14862a87de386e39ffed8f1";

interface settingsType {
  apiKey: string;
  modelName: string;
  calledMethod: string;
  methodProperties: MethodPropertiesTypes;
}

export interface MethodPropertiesTypes {
  CityName?: string;
  Language?: string;
  Page?: number;
  Limit?: number;
  Documents?: DocumentsType[];
}

interface DocumentsType {
  DocumentNumber?: string;
  Phone?: string;
}

const getWarehousesSettings = (props: MethodPropertiesTypes): settingsType => ({
  apiKey: apiKey,
  modelName: "Address",
  calledMethod: "getWarehouses",
  methodProperties: {
    CityName: props.CityName,
    Language: props.Language,
    Page: props.Page,
    Limit: props.Limit,
  },
});

export const getWarehouses = async (props: MethodPropertiesTypes) => {
  try {
    const warehouses = await axios
      .post(
        `https://api.novaposhta.ua/v2.0/json/`,
        JSON.stringify(getWarehousesSettings(props))
      )
      .then((response) => response.data);

    return warehouses.data;
  } catch (error: any) {
    throw Error(error.message);
  }
};

const getNumberTTHSetting = (props: MethodPropertiesTypes): settingsType => ({
  apiKey: apiKey,
  modelName: "TrackingDocument",
  calledMethod: "getStatusDocuments",
  methodProperties: {
    Documents: props.Documents,
  },
});

export const getNumberTTH = async (props: MethodPropertiesTypes) => {
  try {
    const numberTTHInfo = await axios
      .post(
        `https://api.novaposhta.ua/v2.0/json/`,
        JSON.stringify(getNumberTTHSetting(props))
      )
      .then((response) => response.data);

    return numberTTHInfo.errors.length > 0 ? numberTTHInfo.errors[0] : numberTTHInfo.data[0];
  } catch (error: any) {
    throw Error(error.message);
  }
};
