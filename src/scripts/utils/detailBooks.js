import apiEndpoint from '../globals/api-endpoint';
import templateBooks from '../views/templates/template-creator';

const detailBookCard = async(id) => {
    const response = await fetch(apiEndpoint.api_endpoint_detail(id));
    const responseJson = await response.json();
    const item = responseJson;
    templateBooks.detailBooksTemplate(item);
    return item;
};

export default detailBookCard;