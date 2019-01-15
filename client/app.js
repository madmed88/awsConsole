import { InstanceService } from './Instance/instance.service';

const instanceService = new InstanceService();
instanceService.list()
  .then((response) => response.json())
  .then((data) => {
    document.write(JSON.stringify(data));
  });