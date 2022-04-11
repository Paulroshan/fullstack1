package TVS.Bike.Task1;

import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Entity
public class Bike
{
  @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int bikeId;
  private String bikeModelName;
  private String bikeVariant;
  private String bikeEngineCc;
  private int bikeAverageMileage;
  private int bikePrice;
  private int bikeQuantity;
  private String[] bikeColour;
@Override
public String toString() {
	return "Bike [bikeId=" + bikeId + ", bikeModelName=" + bikeModelName + ", bikeVariant=" + bikeVariant
			+ ", bikeEngineCc=" + bikeEngineCc + ", bikeAverageMileage=" + bikeAverageMileage + ", bikePrice="
			+ bikePrice + ", bikeQuantity=" + bikeQuantity + ", bikeColour=" + Arrays.toString(bikeColour) + "]";
}
public Bike(String bikeModelName, String bikeVariant, String bikeEngineCc, int bikeAverageMileage, int bikePrice,
		int bikeQuantity, String[] bikeColour) {
	super();
	this.bikeModelName = bikeModelName;
	this.bikeVariant = bikeVariant;
	this.bikeEngineCc = bikeEngineCc;
	this.bikeAverageMileage = bikeAverageMileage;
	this.bikePrice = bikePrice;
	this.bikeQuantity = bikeQuantity;
	this.bikeColour = bikeColour;
}
public Bike() {
	super();
	// TODO Auto-generated constructor stub
}
public int getBikeId() {
	return bikeId;
}
public void setBikeId(int bikeId) {
	this.bikeId = bikeId;
}
public String getBikeModelName() {
	return bikeModelName;
}
public void setBikeModelName(String bikeModelName) {
	this.bikeModelName = bikeModelName;
}
public String getBikeVariant() {
	return bikeVariant;
}
public void setBikeVariant(String bikeVariant) {
	this.bikeVariant = bikeVariant;
}
public String getBikeEngineCc() {
	return bikeEngineCc;
}
public void setBikeEngineCc(String bikeEngineCc) {
	this.bikeEngineCc = bikeEngineCc;
}
public int getBikeAverageMileage() {
	return bikeAverageMileage;
}
public void setBikeAverageMileage(int bikeAverageMileage) {
	this.bikeAverageMileage = bikeAverageMileage;
}
public int getBikePrice() {
	return bikePrice;
}
public void setBikePrice(int bikePrice) {
	this.bikePrice = bikePrice;
}
public int getBikeQuantity() {
	return bikeQuantity;
}
public void setBikeQuantity(int bikeQuantity) {
	this.bikeQuantity = bikeQuantity;
}
public String[] getBikeColour() {
	return bikeColour;
}
public void setBikeColour(String[] bikeColour) {
	this.bikeColour = bikeColour;
}
  
  


  
}
