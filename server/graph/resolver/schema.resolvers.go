package resolver

// This file will be automatically regenerated based on the schema, any resolver implementations
// will be copied through when generating and any unknown code will be moved to the end.
// Code generated by github.com/99designs/gqlgen version v0.17.36

import (
	"audio-searcher/graph/generated"
	"context"
)

// Health is the resolver for the health field.
func (r *mutationResolver) Health(ctx context.Context) (string, error) {
	return "OK", nil
}

// Health is the resolver for the health field.
func (r *queryResolver) Health(ctx context.Context) (string, error) {
	return "OK", nil
}

// Mutation returns generated.MutationResolver implementation.
func (r *Resolver) Mutation() generated.MutationResolver { return &mutationResolver{r} }

// Query returns generated.QueryResolver implementation.
func (r *Resolver) Query() generated.QueryResolver { return &queryResolver{r} }

type mutationResolver struct{ *Resolver }
type queryResolver struct{ *Resolver }