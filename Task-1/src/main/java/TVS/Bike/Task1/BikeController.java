package TVS.Bike.Task1;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class BikeController
{
  @Autowired
   BikeService least;
  
  @PostMapping("/add")
  public String newcreate(@RequestBody Bike bike) 
  {
	  return least.create(bike).getBikeModelName()+" has Received";
  }
  
  @GetMapping("/home")
  public List<Bike> newList()
  {
	  return least.list();
  }
  
  @GetMapping("/read/{use}")
  public Optional<Bike> newRead(@PathVariable("use") int use )
  {
	  return least.read(use);
  }
}
