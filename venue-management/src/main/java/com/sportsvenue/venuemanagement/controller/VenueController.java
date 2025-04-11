package com.sportsvenue.venuemanagement.controller;

import com.sportsvenue.venuemanagement.model.Venue;
import com.sportsvenue.venuemanagement.repository.VenueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/venues")
public class VenueController {

    @Autowired
    private VenueRepository venueRepository;

    @GetMapping
    public List<Venue> getAllVenues() {
        return venueRepository.findAll();
    }

    @PostMapping
    public Venue addVenue(@RequestBody Venue venue) {
        return venueRepository.save(venue);
    }
}
